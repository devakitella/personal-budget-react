import React from 'react';

function HomePage() {
  return (
    <div className="container center">
        
        <main className="page-area" id="main-content"> 
            <section className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>

            <section className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>

            <section className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear...
                    because they know it is all good and accounted for.
                </p>
            </section>

            <section className="text-box">
                <h1>Chart</h1>
                <p>
                    Drawing this using canvas
                </p>
                <p>
                    <canvas id="myChart" width="300" height="200"></canvas>
                </p>
            </section>

            <section className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>

            <section className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>

            <section className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear...
                    because they know it is all good and accounted for.
                </p>
            </section>

            <section className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </section>

            {/* <h1>My Budget Chart</h1>
            <svg id="chart" width="600" height="600"></svg>
            <button onclick="getChart()">Change Data</button>
            <h1>Chart using D3JS</h1>
            <svg id="chart-container" width="800" height="800"></svg> */}

        </main>

    </div>
  );
}

export default HomePage;
