import React, {Component} from 'react'
class Home extends Component {
	render(){
		const { goToQuiz} = this.props
	    return (
        <div className="home box">
	<h3>Instructions</h3>
	<p>-You have <span className="total-questions">10</span> questions</p>
	<p>-You can the quiz again and again as much as you want.</p>
  <p>-Developed by SURAJ ABUBAKAR DULAH.</p>
	<button  className="btn"
		onClick={goToQuiz}
	>Start Quiz</button>
</div>    )
}
	}
export default Home; 