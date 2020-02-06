import React, { Suspense } from 'react'
import { Route } from 'react-router-dom';
import Travel from '../Travel/Travel';
import Arts from '../Arts/Arts';
import Landing from '../Landing/Landing';
import Animals from '../Animal/Animals';

// make the lazy loading
function Routes() {
    const LazyLoad = Component => {
        return props => <Suspense fallback="">
            <Component {...props} /></Suspense>
    }

    return (
        <div id="container">
            <Route exact path="/" component={LazyLoad(Landing)} />
            <Route path="/travel" component={LazyLoad(Travel)} />
            <Route exact path="/arts" component={LazyLoad(Arts)} />
            <Route exact path="/animal" component={LazyLoad(Animals)} />
        </div>
    )
}

export default Routes;
