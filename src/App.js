import React, { Component, lazy, Suspense } from "react";
import "./scss/main.scss";
// import MyComp from "./components/MyComp";
const MyComp = lazy(() => import("./components/MyComp"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Another component</div>

          <Suspense fallback={<div>Loading...</div>}>
            <MyComp />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;

/*







   To start with the LAZY LOADING , you will have to import the following from REACT:

              1_  **  start by adding lazy:

       //         import React, { Component, lazy } from "react";



              2_  **  then create a function:

       //     const MyComp = lazy(() => import("./components/MyComp"));




             3_  **  After typing that you are going to have an ERROR 
                     to solve that problem you wil have to import the SUSPENSE, like so:

              
                     import React, { Component, lazy, Suspense } from "react";
     

            WHAT IS THE SUSPENSE TASK?

            ** It will render somethings while the stuff in the MyComp.js is loading/rendering
            ** The suspense has to have something to render
            ** the suspense has  PROP called FALLBACK, which could be a component but in this case
               I will add a text inside a div, you can also add an img etc.


                <Suspense fallback={<div>Loading...</div>}>
               

            4 _  **  Type the following like so:

              
                         return (
                                    <Suspense fallback={<div>Loading...</div>}>
                                            <div className="App">
                                                <header className="App-header">
                                                    <MyComp />
                                                </header>
                                            </div>
                                    </Suspense>
                             );

              **  If you notice , when you refresh the page you have the loading in the top left
                corner, but it so fast you cnt really see it, an that is because it s lightweight,
                it loads really fast, if you want to see it go to the browser console (check the img 
                    in the README file) and choose the option: Slow 3G



                5 _  **  Test, check what happens after you add this  <div>Another component</div> , 
                        like so:



                         return (
                                    <Suspense fallback={<div>Loading...</div>}>
                                            <div className="App">
                                                <header className="App-header">
                                                <div>Another component</div>
                                                    <MyComp />
                                                </header>
                                            </div>
                                    </Suspense>
                             );

            
                6 _  ** Now i want this to be loaded first :  <div>Another component</div>
                       FOR THAT I NEED TO CHANGE THE PLACEMENT OF THE <suspense>



                         return (
                                   
                                            <div className="App">
                                                <header className="App-header">
                                                <div>Another component</div>

                                                 <Suspense fallback={<div>Loading...</div>}>
                                                    <MyComp />
                                                 </Suspense>


                                                </header>
                                            </div>
                                   
                             );



                                React Lazy Loading & Code splitting
                             https://www.youtube.com/watch?v=tV9gvls8IP8

                             

                            First Look at React Suspense for Data Fetching
                             https://youtu.be/fTFoBr5LJGE
*/
