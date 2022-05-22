import React from 'react'
import "./Review.css"
import user1 from "../../assets/images/image-john.jpg"
import user2 from "../../assets/images/image-tanya.jpg"
import iconprev from "../../assets/images/icon-prev.svg"
import iconnext from "../../assets/images/icon-next.svg"
import pattern from "../../assets/images/pattern-quotes.svg"
function Review() {
  return (
    <main class="container">
      <div class="quotes">
            <div class="quote__one active">
                <img src={pattern} class="quote" alt="quotes"/>
                <p class="quote__text">
                    “ I’ve been interested in coding for a while but never taken the jump,
                    until now. I couldn’t recommend this course enough. I’m now in the job
                    of my dreams and so excited about the future. ”
                </p>
                <div class="quote__author">
                    <h1>Tanya Sinclair</h1>
                    <p class="light">UX Engineer</p>
                </div>
            </div>

            <div class="quote__two">
                <img src={pattern} class="quote" alt="quotes"/>
                <p class="quote__text">
                    “ If you want to lay the best foundation possible I’d recommend
                    taking this course. The depth the instructors go into is incredible.
                    I now feel so confident about starting up as a professional
                    developer. ”
                </p>
                <div class="quote__author">
                    <h1>John Tarkpor</h1>
                    <p class="light">Junior Front-end Developer</p>
                </div>
            </div>
        </div>

        <div class="images">
            <div>
            <div class="block_arrow">
                <img src={iconprev} class="arrow_left" alt="prev"/>
                <img src={iconnext} class="arrow_right" alt="next"/>          
            </div>
            </div>
            <div class="protrait">
            <div class="block_portrait portrait__one active">
                <img src={user1} alt="tanya"/>
            </div>
            <div class="block_portrait portrait__two ">
                <img src={user2} alt="john"/>
            </div>     
            </div>
        </div>
    
  </main>
  )
}

export default Review