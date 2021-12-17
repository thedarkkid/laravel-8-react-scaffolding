import { Alert, Button, Form } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CSRFField from '../../widgets/CSRFField';
import { parseErrors } from '../../../common/auth';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState([]);

    const login = useCallback(async (e) => {
        e.preventDefault();
        setErrors([]);
        try {
            const response = await axios.post('/login', { email, password, remember });
        } catch (e) {
            setErrors(parseErrors(e.response.data.errors));
        }
    }, [email, password, remember]);

    return (
        <div className="container m-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center h5">LOGIN</h1>
                        </div>
                        <div className="card-body">
                            <Errors errors={errors}/>
                            <Form method="POST" onSubmit={login}>
                                <CSRFField/>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control value={email}
                                                  onChange={(e) => setEmail(e.target.value)}
                                                  className="block mt-1 w-full" type="email"
                                                  required autoFocus/>
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Label htmlFor="password">Password:</Form.Label>
                                    <Form.Control id="password" className="block mt-1 w-full"
                                                  value={password}
                                                  onChange={(e) => setPassword(e.target.value)}
                                                  type="password"
                                                  name="password"
                                                  required autoComplete="current-password"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="remember">
                                    <Form.Check value={remember}
                                                onChange={(e) => setRemember(!remember)}
                                                type="checkbox" label="Remember me"/>
                                </Form.Group>
                                <Form.Group className="flex items-center justify-end mt-4">
                                    <Link className="underline text-sm text-gray-600 hover:text-gray-900"
                                          to="/">
                                        Forgot your password?
                                    </Link>
                                </Form.Group>

                                <Button type="submit" className="ml-3">
                                    Log in
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Errors ({ errors }) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setShow(errors.length > 0);
    }, [errors]);

    return (
        <>
            {errors && errors.length > 0 && <div>
                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    {errors.map((error, idx) => (
                        <Alert show={show} key={idx} onClick={() => setShow(false)} variant="danger" dismissible>
                            Error! {error}
                        </Alert>
                    ))}
                </ul>
            </div>}
        </>
    );
}

