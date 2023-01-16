import React from 'react';

export const WelcomeComponent = React.lazy(
  () => import(/* webpackChunkName: "WelcomeComponent" */ './welcome/welcome'),
);

export const BestSellersComponent = React.lazy(
  () =>
    import(
      /* webpackChunkName: "BestSellersComponent" */ './bestSeller/bestSeller'
    ),
);
export const CoffeeLifeComponent = React.lazy(
  () =>
    import(
      /* webpackChunkName: "CofeeLifeComponent" */ './coffeeLife/coffeeLife'
    ),
);

export const OurProductsComponent = React.lazy(
  () =>
    import(
      /* webpackChunkName: "OurProductsComponent" */ './ourProducts/ourProducts'
    ),
);

export const TravelPress = React.lazy(
  () =>
    import(
      /* webpackChunkName: "TravelPressComponent" */ './travelPress/travelPress'
    ),
);
export const PressComponent = React.lazy(
  () => import(/* webpackChunkName: "PressComponent" */ './press/press'),
);

export const FreshGroundsComponent = React.lazy(
  () =>
    import(
      /* webpackChunkName: "FreshGroundsComponent" */ './freshGrounds/freshGrounds'
    ),
);
