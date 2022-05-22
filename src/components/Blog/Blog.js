import React from 'react'

const Blog = () => {
  return (
    <div className='m-5'>
      <h2 className='mb-5 text-center'>
        Q1. How will you improve the performance of a React Application?
      </h2>
      <div className='text-start'>
        <div className='mb-5'>
          <h5>
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged. According to research, a second delay in load time
            can cause a 7 percent reduction in conversions
          </h5>
          <ul>
            <li>Keeping component state local where necessary</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Windowing or list virtualization in React</li>
            <li>Lazy loading images in React</li>
          </ul>
        </div>
      </div>
      <h2 className='mb-5 text-center'>
        Q2. What are the different ways to manage a state in a React
        application?
      </h2>
      <div className='text-start'>
        <div className='mb-5'>
          <h5>The Four Kinds of React State to Manage</h5>
          <ul>
            <li>1. Local state: </li>
            <p>
              useState is the first tool you should reach for to manage state in
              your components. It can take accept any valid data value,
              including primitive and object values. Additionally, its setter
              function can be passed down to other components as a callback
              function.
            </p>
            <p>
              useReducer is another option that can be used for either local or
              global state. It is similar in many ways to useState under the
              hood, although instead of just an initial state it accepts a
              reducer.
            </p>
            <li>2. Global state: </li>
            <p> Context API built-in React features to manage Global state. </p>
            <p>Redux is a good way to manage Global state in react.</p>
            <p>
              To manage Global state efficiently, using third-party libraries
              like Zustand, Jotai, and Recoil is very popular.
            </p>
            <li>3. Server state: </li>
            <p>
              Server state can be deceptively challenging to manage. Sometimes
              using useState and useEffect is used for server state but there
              are few limitation as well.
            </p>
            <p>
              To fix this, there are a couple of great libraries that make data
              fetching in React a breeze: SWR and React Query.
            </p>
            <li>4. URL state: </li>
            <p>
              URL state is largely already managed for you if you are using a
              framework like Next.js or the current version of React Router. URL
              state is quite easy to manage using useHistory, useLocation and
              useParams.
            </p>
          </ul>
        </div>
      </div>
      <h2 className='mb-5 text-center'>
        Q3. How does prototypical inheritance work?
      </h2>
      <div className='mb-5'>
        <p className='text-start'>
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Nowadays, in modern language, it is being
          set using __proto__.
        </p>
        <p className='text-danger'>
          Syntax: ChildObject.__proto__ = ParentObject
        </p>
      </div>
      <h2 className='mb-5 text-center'>
        Q4. Why you do not set the state directly in React?
      </h2>
      <div className='mb-5 text-start'>
        <p>I never update the state directly because of following reason:</p>
        <ul>
          <li>
            If I update it directly, calling the setState() afterward may just
            replace the update I made.
          </li>
          <li>
            When I directly update the state, it does not change this.state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value.
          </li>
          <li> I will lose control of the state across all components.</li>
        </ul>
      </div>
      <h2 className='mb-5 text-center'>
        Q5. How will you implement a search to find products by name?
      </h2>
      <div className='mb-5 text-start'>
        <p>
          I will use any of following method to search a product name from array
          of products:
        </p>
        <ul className='text-success'>
          <li>products.includes()</li>
          <li>products.indexOf</li>
          <li>products.find()</li>
          <li>products.filter()</li>
        </ul>
      </div>
      <h2 className='mb-5 text-center'>
        Q6. What is a unit test? Why should write unit tests?
      </h2>
      <div className='mb-5 text-start'>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property.
        </p>
        <h5>
          There are many benefits of unit testing. These are written below:
        </h5>
        <ul>
          <li>The process becomes agile</li>
          <li>Quality of Code</li>
          <li>Find Software Bugs Easily</li>
          <li>Facilitates Change</li>
          <li>Easy Debugging Process</li>
          <li>Reduce Time and Costs</li>
        </ul>
      </div>
    </div>
  )
}

export default Blog
