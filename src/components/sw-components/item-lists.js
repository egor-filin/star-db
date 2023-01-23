import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = swapiService => ({getData: swapiService.getAllPeople})
const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)), 
  mapPersonMethodsToProps
);

const mapPlanetMethodsToProps = swapiService => ({getData: swapiService.getAllPlanets})
const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);

const mapStarchipMethodsToProps = swapiService => ({getData: swapiService.getAllStarships})
const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarchipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};