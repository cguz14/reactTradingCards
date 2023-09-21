'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
    id: 0,
  },
];

/* <React.Fragment>
{tradingCardData.map(currentCard =>
    <p key={currentCard.id}>     {currentCard.name}    </p>
)}
</React.Fragment>

// EQUIVALENT TO:
empty_array = [];
for (const currentCard of tradingCardData) {
  empty_array.push(<p key={currentCard.id}>{currentCard.name}</p>);
}
<React.Fragment>
  {empty_array}
</React.Fragment> */





function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

ReactDOM.render(
  <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
  document.querySelector('#balloonicorn'),
);

ReactDOM.render(
  <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
  document.querySelector('#float'),
);

ReactDOM.render(
  <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
  document.querySelector('#llambda'),
);

ReactDOM.render(
  <TradingCard name="Shortstack Overflow" skill="chugging a bottle of maple syrup" imgUrl="static/img/shortstack-overflow.jpeg" />,
  document.querySelector('#shortstack-overflow'),
);

ReactDOM.render(
  <TradingCard name="Off-By-One" skill="climbing mountais" imgUrl="/static/img/off-by-one.jpeg" />,
  document.querySelector('#off-by-one'),
);