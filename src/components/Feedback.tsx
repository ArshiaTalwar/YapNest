import './Feedback.css'
export default function Feedback() {
  return (
    <div  className='star-rating'>
      <h1>Your Opinion Matters!</h1>
<h2>Show some <code>&lt;love&gt;</code> and <code>&lt;pyaarr&gt;</code></h2>

<div className="star-source">
  <svg>
         <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
            <stop stop-color="#bf209f" offset="0%"></stop>
            <stop stop-color="#d62a9d" offset="60%"></stop>
            <stop stop-color="#ED009E" offset="100%"></stop>
        </linearGradient>
    <symbol id="star" viewBox="153 89 106 108">   
      <polygon id="star-shape" stroke="url(#grad)" stroke-width="5" fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"></polygon>
    </symbol>
</svg>

</div>
<div className="star-container">
  <input type="radio" name="star" id="five"/>
  <label htmlFor="five">
    <svg className="star">
      <use xlinkHref="#star"/>
    </svg>
  </label>
  <input type="radio" name="star" id="four"/>
  <label htmlFor="four">
    <svg className="star">
      <use xlinkHref="#star"/>
    </svg>
  </label>
  <input type="radio" name="star" id="three"/>
  <label htmlFor="three">
    <svg className="star">
      <use xlinkHref="#star"/>
    </svg>
  </label>
  <input type="radio" name="star" id="two"/>
  <label htmlFor="two">
    <svg className="star">
      <use xlinkHref="#star" />
    </svg>
  </label>
  <input type="radio" name="star" id="one"/>
  <label htmlFor="one">
   <svg className="star">
    <use xlinkHref="#star" />
   </svg>
  </label>
</div>

    </div>
  );
}
