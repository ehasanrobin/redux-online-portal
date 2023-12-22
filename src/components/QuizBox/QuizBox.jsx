import React from "react";

const QuizBox = ({ quiz }) => {
  const { id, question, video_title, options } = quiz;
  console.log(options);
  return (
    <div class="quiz">
      <h4 class="question">{question}</h4>
      <form class="quizOptions">
        {/* <!-- Option 1 --> */}
        {options.map((option) => (
          <label for={`option${id}_q${option.id}`}>
            <input type="checkbox" id={`option${id}_q${option.id}`} />A function
            that is called after a certain time interval
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuizBox;
