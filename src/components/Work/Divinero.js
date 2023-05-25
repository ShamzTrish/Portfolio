
import './Divinero.css'
import { FaArrowLeft } from "react-icons/fa"

import pagination from '../../video/pagination.mov'
import filterCusine from '../../video/filterCusine.mov'
import removeItems from '../../video/removeItems.mov'
import addingItems from '../../video/addingItems.mov'
import videoValidation from '../../video/Validation.mov'
import { useEffect } from 'react'


const Divinero = ({ setSeeDivinero, seeDivinero }) => {

  const backToTop = () => {
    setSeeDivinero(false)
    window.scrollTo(0, 0)
  }

  const positions = {
    default: 0,
    xlarge: 500,
    large: 400,
    medium: 320,
  }

  useEffect(() => {
    const xlargeMq = window.matchMedia("(max-width: 970px)");
    const largeMq = window.matchMedia("(max-width: 736px)");
    const mediumMq = window.matchMedia("(min-width: 601px)");
    const smallMq = window.matchMedia("(max-width: 600px)");

    const scrollToPosition = (position) => window.scrollTo(0, position);

    if (seeDivinero) {
      if (smallMq.matches) {
        scrollToPosition(positions.medium)
      } else if (largeMq.matches && mediumMq.matches) {
        scrollToPosition(positions.large)
      } else if (xlargeMq.matches) {
        scrollToPosition(positions.xlarge)
      } else {
        scrollToPosition(positions.default)
      }
    }

  });

  return <>
    <a target="_blank" rel="noreferrer" href="https://divinero-food-app.netlify.app/"><header className="headerContainer"></header></a>
    <button onClick={backToTop} className='btn-close button'><span className='btn-back'><FaArrowLeft /></span>Back</button>
    <section className='project-section'>
      <h3>What is this App?</h3>
      <p>Welcome to my online food ordering application! Once you launch the app, you'll have access to the entire menu. You can easily navigate through the menu by clicking on page numbers at the top. It's very simple to add the items you want to the cart, and if you're looking for something specific, you can filter by cuisine. Once you select a cuisine, the menu will display only the meals from that particular country. When you're ready to check out, simply head to the cart and fill out the necessary form. After passing validation, your order will be sent to Firebase. To test the application, please <a target="_blank" rel="noreferrer" className='app-reference' href="https://divinero-food-app.netlify.app/">click here </a> and give it a try!</p>
      <h3>Why did I choose this App?</h3>
      <p>I built this ecommerce app in React for my friend's restaurant, who needed a logo and homepage design. I also created a simple ordering app for his restaurant's wide range of cuisine options. Additionally, I saw this project as a great opportunity to enhance my React skills and develop a valuable addition to my portfolio.</p>
    </section>
    <section>
      <h2>SNIPPETS OF MY APP</h2>

    </section>

    <div className='work-section'>
      <article className="flex-columns">
        <div className="flexRow">
          <div className="column">
            <div className="column-1">
              <div className="video-wrapper">
                <video className='borderR-r' width="470" height="280" controls src={pagination} muted loop></video>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="column-2">
              <h3>Pagination</h3>
              <p>To prevent overloading the app, I used the useState hook to set the initial page to 1 and limit the render to 5 items per page. Then, I used the slice method to extract the items from the array based on their index, allowing the customer to click on page numbers and browse the menu 5 items at a time.</p>
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/ShamzTrish/ef062f09b6c1b4548391ea82f43dae84">
                <i className="button">See the code</i></a>
            </div>
          </div>
        </div>
      </article>


      <article className="flex-columns flex-reverse">
        <div className="flexRow">
          <div className="column">
            <div className="column-1">
              <video className='borderR-l' width="470" height="280" controls src={addingItems} muted loop></video>
            </div>
          </div>
          <div className="column bg-dark">
            <div className="column-2">
              <h3>React context - adding items to cart</h3>
              <p>I used React Context by creating cartContext and cartProvider because I needed to connect multiple components that were not equal to each other. In cartProvider, I was able to write the entire logic for adding items to the cart. If an item already exists in the cart, I locate its ID and index position and update its amount. If the item doesn't yet exist in the cart, I add it to the array, also update its price.</p>
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/ShamzTrish/b25910f07394dc99cfe5c63b22dd70a1">
                <i className="button">See the code</i></a>
            </div>
          </div>
        </div>
      </article>


      <article className="flex-columns">
        <div className="flexRow">
          <div className="column">
            <div className="column-1">
              <video className='borderR-r' width="470" height="280" controls src={removeItems} muted loop></video>
            </div>
          </div>
          <div className="column bg-light">
            <div className="column-2">
              <h3>React context - removing items from cart & clearing cart</h3>
              <p>This had many similarities with the previous code, so I was able to reuse some of it. When the minus button is clicked, one amount is always subtracted from the existing item. If the item is the last one, another click will remove it from the array. If it's not the last one, the amount is simply updated. I also added a feature that clears all items from the cart after the user submits their order to Firebase.</p>
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/ShamzTrish/8c18e4631ea245b20b4da8458df2f6c5">
                <i className="button">See the code</i></a>
            </div>
          </div>
        </div>
      </article>


      <article className="flex-columns flex-reverse">
        <div className="flexRow">
          <div className="column">
            <div className="column-1">
              <video className='borderR-l' width="470" height="280" controls src={filterCusine} muted loop></video>
            </div>
          </div>
          <div className="column bg-dark">
            <div className="column-2">
              <h3>Filtering</h3>
              <p>To enhance the user experience while ordering, I implemented a cuisine filtering feature that enables users to filter food choices based on their preferences. To achieve this, I created a function that filters the data based on the selected cuisine and used map function to only display food items that match the user's preference.</p>
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/ShamzTrish/e8020d2d44df25a6d4f285110e2ba2e8">
                <i className="button">See the code</i></a>
            </div>
          </div>
        </div>
      </article>

      <article className="flex-columns flex">
        <div className="flexRow">
          <div className="column">
            <div className="column-1">
              <video className='borderR-r' width="470" height="280" controls src={videoValidation} muted loop></video>
            </div>
          </div>
          <div className="column bg-dark">
            <div className="column-2">
              <h3>Checkout - validation & Firebase</h3>
              <p>After finishing the checkout process, a new card is presented that includes a checkout form. To ensure that orders are complete and accurate, I implemented validation for all form fields. After the user submits the order, a confirmation message is displayed to confirm the successful transaction and the order is sent to Firebase. </p>
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/ShamzTrish/bfe3e84655e7a8396cde787da0a156d9">
                <i className="button">See the code</i></a>
            </div>
          </div>
        </div>
        <div>
          <button style={{ marginLeft: '10px' }} onClick={backToTop} className='btn-close button'><span className='btn-back'><FaArrowLeft /></span>Back</button>
        </div>
      </article>
    </div>


  </>
}


export default Divinero