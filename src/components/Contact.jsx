import React from "react"
function Contact(){
    return(
        <section className="form" id="contact">
        <h2>
            Contact
        </h2>
        <hr/>
        <p>
            Do you wabt us to style your home?Fill out the form me in with the details :)We love meeting new people!
        </p>
        <form>
            <label for="name">
                Name
            </label>
                <input type="text" id="name"/>
                <label for="email">
                    Email
                </label>
                <input type="Email" id="email"/>
                <label for="message">
                    Message
                </label>
                <input type="text" id="message"/>
                <input type="submit" value="Send Message"/>

        </form>

    </section>
    )
}
export default Contact