import {useEffect, useState} from "react";
import userService from "../../services/userService.js";
import {forEach} from "react-bootstrap/ElementChildren";

const BudgetModalForm = ({showBudgetModalForm}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            await userService.getCategories();
            setCategories(getCategories);
        }
    }, [categories]);
    return(
        <div className="accountBudgetModalForm">
            <div className="accountBudgetModalForm-header">

            </div>
            <div className="accountBudgetModalForm-body">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="budgetModalForm-categories">
                        {categories.map((category) => (
                            <div className="budget-category-element" key={category.name}>
                                <input name="name" placeholder={category.name} type="text"></input>
                                <input name="amount" type="number"> </input>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default BudgetModalForm;