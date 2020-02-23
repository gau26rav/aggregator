import React from 'react'
import BackBtn from '../Back/BackBtn';

function Employee() {
    return (
        <div className="emp-container">
            <BackBtn/>
            <h1>Employee Segment</h1>
            <section>
                <p>
                    <div className="container">
                        Employment is a relationship between two parties, usually based on a contract where work is paid for, where one party,
                         which may be a corporation, for profit, not-for-profit organization, co-operative or other entity is the employer and
                         the other is the employee.[1] Employees work in return for payment, which may be in the form of an hourly wage,
                          by piecework or an annual salary, depending on the type of work an employee does or which sector they are working in.
                          Employees in some fields or sectors may receive gratuities, bonus payment or stock options. In some types of employment,
                            employees may receive benefits in addition to payment. Benefits can include health insurance, housing, disability
                           insurance or use of a gym. Employment is typically governed by employment laws, organisation or legal contracts.
                    </div>
                </p>
            </section>
        </div>
    )
}

export default Employee;
