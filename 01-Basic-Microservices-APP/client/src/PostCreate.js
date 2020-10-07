import React from 'react';

export default () => {
    return <div>
        <form>
            <div className='form-group'>
                <label>Title</label>
                <input className='form-control' />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>;
};
