import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import Travel from '../Travel/Travel';
import Arts from '../Arts/Arts';
import Landing from '../Landing/Landing';
import Animals from '../Animal/Animals';
import Employee from '../Employee/Employee';
import NotFound from '../NotFound/NotFound';
import Food from '../Food/Food';

// make the lazy loading
function Routes() {
    const LazyLoad = Component => {
        return props => <Suspense fallback="">
            <Component {...props} /></Suspense>
    }

    return (
        <div id="container">
            <Switch>
                <Route exact path="/" component={LazyLoad(Landing)} />
                <Route path="/employee" component={LazyLoad(Employee)} />
                <Route path="/travel" component={LazyLoad(Travel)} />
                <Route exact path="/arts" component={LazyLoad(Arts)} />
                <Route exact path="/food" component={LazyLoad(Food)} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes;
