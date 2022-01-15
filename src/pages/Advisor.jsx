import { Link } from "react-router-dom";

import "../styles/Advisor.css";

export default function Advisor() {
  // var bmiResult = document.getElementById("bmiResult");
  // var suggestion = document.getElementById("suggestion");

  // if(bmiResult.value <= 18.5 ){
  // suggestion.value = "You are underweight. Try to increase your weight"
  // }
  // else if(bmiResult.value >= 18.5 && bmiResult.value <= 24.9 ){
  // suggestion.value = "You have normal weight"
  // }
  // else if(bmiResult.value >= 25 && bmiResult.value <= 29.9 ){
  // suggestion.value = "You are overweight. Try to reduce your weight"
  // }
  // else if(bmiResult.value >= 30){
  // suggestion.value = "You are obesity. You need to reduce your weight and control your consumption"
  // }

  return (
    <div className="advisorContent">
      {/* isi disini ya untuk Advisor */}
      <h2>Advisor</h2>
      <p className="advisorText">
        BMI is a measurement of a person's leanness or corpulence based on their
        height and weight, and is intended to quantify tissue mass. It is widely
        used as a general indicator of whether a person has a healthy body
        weight for their height. Specifically, the value obtained from the
        calculation of BMI is used to categorize whether a person is
        underweight, normal weight, overweight, or obese depending on what range
        the value falls between. These ranges of BMI vary based on factors such
        as region and age, and are sometimes further divided into subcategories
        such as severely underweight or very severely obese. Being overweight or
        underweight can have significant health effects, so while BMI is an
        imperfect measure of healthy body weight, it is a useful indicator of
        whether any additional testing or action is required. Refer to the table
        below to see the different categories based on BMI that are used by the
        calculator.
      </p>
      <div className="table-bmi">
        <h2>BMI Table</h2>
        <table width="50%">
          <tr>
            <th>BMI Index Range</th>
            <th>Results</th>
          </tr>
          <tr>
            <td> Below than 18,5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18,5 - 24,9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25 - 29,9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td> More than 30</td>
            <td>Obesity</td>
          </tr>
        </table>
      </div>

      {/* <h2>Your result is</h2>
      <div className="bmiresult" weight="150px" height="150px" >
        <h1>20</h1>
      </div>
      <div className="suggestion">
        <p>You are good to go</p>
      </div>
      <div className="button">
        <a id='more-details-button'>More Details</a>
      </div> */}

      {/* <div className="suggestion">
        <h2>You are Underweight?</h2>
        <p>Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns. So, if you're underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight.
        <br />
        Here are some healthy ways to gain weight when you're underweight:</p>
        <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429">Underweight Tips</a>
      </div>
      
      <div className="suggestion">
        <h2>You are Normal?</h2>
        <p>You are good to go</p>
      </div>

      <div className="suggestion">
        <h2>You are Overweight?</h2>
        <p>Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns. So, if you're underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight.
        <br />
        Here are some healthy ways to gain weight when you're underweight:</p>
        <a href="https://www.everydayhealth.com/diet-nutrition/bmi/how-you-reduce-your-bmi-science-backed-steps/">Overweight Tips</a>
      </div>

      <div className="suggestion">
        <h2>You are Obesity?</h2>
        <p>Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns. So, if you're underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight.
        <br />
        Here are some healthy ways to gain weight when you're underweight:</p>
        <a href="https://food.ndtv.com/health/13-effective-tips-to-control-obesity-1236369">Obesity Tips</a>
      </div> */}

      <br />
      <br />
      <div className="suggestion">
        <a href="AdvisorDetail.jsx">More Details {">>"}</a>
      </div>

      <br />
      <br />
    </div>
  );
}

// Di bawah 18,5 = Berat badan kurang
// 18,5 – 24,9 = Berat badan normal
// 25 – 29,9 = Berat badan berlebih (kecenderungan obesitas)
// 30 ke atas = obesitas
