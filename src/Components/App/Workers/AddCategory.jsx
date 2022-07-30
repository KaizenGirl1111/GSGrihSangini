import React, { Fragment, useState } from "react";
import "./AddCategory.css";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";




function AddCategory() {

    let history = useNavigate('/')
    const [age, setage] = useState("");
    const [category, setcategory] = useState();
    const [expirience, setexpirience] = useState();

    async function handleSubmit(e) {

    }


    return (
        <Fragment>
            <NavigationBar />
            <div class="one"></div>
            <form className="AddCategory_form" onSubmit={handleSubmit}>
                <h1 className="AddCategory_heading">AddCategory</h1>



                <div className="input_element">
                    <input
                        name="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        placeholder="category"
                    />
                </div>
                <div className="input_element">
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={(e) => { setage(e.target.value) }}
                        placeholder="Contact Number"
                        autoComplete="on"
                    />
                </div>
                <div className="input_element">
                    <input
                        type="number"
                        name="expirience"
                        value={expirience}
                        onChange={(e) => { setexpirience(e.target.value) }}
                        placeholder="expirience"
                        autoComplete="on"
                    />
                </div>
                <button type="submit">AddCategory</button>
            </form>
            <Footer />
        </Fragment>
    );
}

export default AddCategory;