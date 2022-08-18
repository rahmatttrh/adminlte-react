import React from 'react'

function NotFound() {
   return (
      <div class="hold-transition login-page">
         <section className="content">
            <div className="error-page">
               <h2 className="headline text-secondary"> 404</h2>
               <div className="error-content">
                  <h3><i className="fas fa-exclamation-triangle text-secondary" /> Oops! Page not found.</h3>
                  <hr />
                  <p>
                     We could not find the page you were looking for.
                     Meanwhile, you may want to <a href="/">return back</a>.
                  </p>

               </div>
               {/* /.error-content */}
            </div>
            {/* /.error-page */}
         </section>

      </div>
   )
}

export default NotFound