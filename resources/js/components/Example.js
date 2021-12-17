import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import slice from '../store/slices/counter';

export default function Example () {
    const count = useSelector(slice.selectors.getCount);
    const { increment, decrement } = slice.actions;
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Count: {count}</div>
                        <div className="card-body">
                            <ButtonGroup>
                                <Button onClick={() => dispatch(increment())} variant="primary">Increment</Button>
                                <Button onClick={() => dispatch(decrement())} variant="warning">Decrement</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
