export const Login = () => {
    return (
        <div className="register-form-wraper">
            <h1>Sign In</h1>
            <form>
                <div>
                    <label htmlFor="email-sign-in">Email:</label>
                    <input name="email" id="email-sign-in" type="text" />
                </div>

                <div>
                    <label htmlFor="password-sign-in">Password:</label>
                    <input
                        name="password"
                        id="password-sign-in"
                        type="password"
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};
