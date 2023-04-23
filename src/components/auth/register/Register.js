export const Register = () => {
    return (
        <div className="register-form-wraper">
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        id="username"
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="password-sign-up">Password:</label>
                    <input
                        name="password"
                        id="password-sign-up"
                        type="password"

                    />
                </div>
                <div>
                    <label htmlFor="email-sign-up">Email:</label>
                    <input
                        name="email"
                        id="email-sign-up"
                        type="text"

                    />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        name="age"
                        id="age"
                        type="number"

                    />
                </div>

                <div>
                    <label htmlFor="gender">Gender: </label>
                    <select
                        name="gender"
                        id="gender"

                    >
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="tac">Terms and Conditions:</label>
                    <input
                        type="checkbox"
                        name="tac"
                        id="tac"

                    />
                </div>

                <div>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};