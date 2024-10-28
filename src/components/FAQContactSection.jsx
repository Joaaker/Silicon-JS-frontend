import React from 'react'
import { Link } from 'react-router-dom'

const FAQContactSection = () => {
  return (
    <section className="FAQ-contact-section">   
      <div className="text-container">
        <h2>Any questions? <br className="hide-for-mobile"/> Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get <br className="hide-for-mobile"/> in touch?</p>
      </div>
      <div className="FAQ-items-container">
        <div className="FAQ-item">
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded="false" aria-controls="answer1">
              <span>Is any of my personal information stored in the App?</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>    
          <div className="FAQ-answer" id="answer1">
            <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            <p>Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
          </div>
        </div>
        <div className="FAQ-item">
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded="false" aria-controls="answer2">
              <span>What formats can I download my transaction history in?</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div> 
            <div className="FAQ-answer" id="answer2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti reiciendis consectetur alias incidunt quibusdam architecto repellat natus ut odit. Non id consequuntur impedit provident. Odit amet, officiis a, eius debitis quam tempore, asperiores animi sapiente cupiditate error fugiat modi non sequi impedit dignissimos. Delectus, facilis! Amet dolores necessitatibus atque voluptates quis dolorem, quos modi eius iure. Quia itaque delectus fugit iure, sunt corporis amet blanditiis laudantium!</p>
            </div>
        </div>
        <div className="FAQ-item">
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded="false" aria-controls="answer3">
              <span>Can I schedule future transfers?</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div> 
            <div className="FAQ-answer" id="answer3">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
        </div>
          <div className="FAQ-item">
            <div className="dropdown-btn-container">
              <button className="dropdown-btn" aria-expanded="false" aria-controls="answer4">
                <span>When can I use Banking App services?</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div> 
          <div className="FAQ-answer" id="answer4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui ex perferendis soluta aperiam perspiciatis placeat reiciendis recusandae provident. Itaque exercitationem, porro, corporis, incidunt aliquid beatae blanditiis id aperiam sapiente eos dignissimos natus veniam optio accusantium. Beatae inventore quidem veniam voluptatem est tempora voluptatibus vitae, iste accusamus quisquam doloribus esse eligendi similique eum sit modi rem.</p>
          </div>
        </div>
        <div className="FAQ-item">
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded="false" aria-controls="answer5">
              <span>Can I create my own password that is easy for me to remember?</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
            <div className="FAQ-answer" id="answer5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio iure ipsum maxime deserunt! Molestias, amet debitis expedita tenetur eum explicabo delectus eligendi sed nesciunt error at aperiam assumenda culpa, porro alias optio. Rem, odit totam id doloremque cumque fugit eligendi aperiam labore fugiat at.</p>
            </div>
        </div>
        <div className="FAQ-item">
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded="false" aria-controls="answer6">
              <span>What happens if I forget or lose my password?</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="FAQ-answer" id="answer6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam pariatur aliquam, tempora obcaecati minima, repudiandae suscipit enim cumque dolor quaerat debitis deleniti sint consequatur saepe et adipisci qui quod. Nemo labore sunt, tempora doloremque fugiat aspernatur consequatur animi iste.</p>
          </div>
        </div>
      </div>
      <button id="contact-us-btn" className="primary-btn mobile-only">Contact us now</button>
      <div className="contact-us-container hide-for-mobile">
        <div className="contact-container">
          <i className="fa-solid fa-phone-volume"></i>
          <p>Still have  questions?</p>
          <Link to="/Contact" className="purple">
            <span>Contact us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="contact-container">
          <i className="fa-solid fa-comment-dots fa-flip-horizontal"></i>
          <p>Don't like phone calls?</p>
          <Link to="/Contact" className="green">
            <span>Contact us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQContactSection