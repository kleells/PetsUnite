const React = require('react')
const Def = require('../default')

function showEvents(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
            </h3>
    )
    if (data.events.comments.length) {
        comments = data.events.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='event'>{c.event ? `I'm interested in the event! 🥰 `  : 'Admirer! ❤️ ' }</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>Check out the event!</h1>
                    <div className='container'>
                        <li className='list-group-item text-capitalize rounded'>
                            <img style={{marginTop: 10, marginBottom: 10, borderRadius: 10}}src={data.events.pic} />
                        </li> 
                    </div>
                    <div className="row">
                    <div className='container'>
                        <div className="form-group col-sm-6">
                            <li className='list-group-item text-capitalize rounded'>
                                <h2>{data.events.event_name}</h2>
                                <p style={{textTransform: 'none'}}>{data.events.event_details}</p>
                            </li>

                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_date32.png"/>{data.events.date}, from {data.events.start_time}-{data.events.end_time}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_location32.png"/>{data.events.location}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_location32.png"/>{data.events.address}, {data.events.city}, {data.events.state}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <a href={`/events/${data.id}/edit`} className='btn btn-success'>
                                    <button type="submit" className="btn btn-success ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }}  className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg>Edit</button></a>
                                <form method='POST' action={`/events/${data.id}?_method=DELETE`}>
                                    <button type='submit' className='btn btn-danger  mx-2 my-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }} className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>Delete</button>
                                </form>
                            </li>  
                        </div>
                        <div className="form-group col-sm-6">
                            <li className='list-group-item text-capitalize rounded'>
                                <h2>Please leave a comment!</h2>
                                <form action={`/events/${data.events._id}/comment`} method="POST">
                                    <div className="row">
                                        <label htmlFor="content">Content</label>
                                        <textarea id="content" name="content" className="form-control"></textarea>
                                        <label htmlFor="author">Author</label>
                                        <input id="author" name="author" className="form-control" />
                                        <label htmlFor="event">I'm interested in {data.events.event_name}!</label>
                                        <input type="checkbox" id="event" name="event" className="form-control form-check-input" />
                                    </div>
                                    <div className='text-center'>
                                        <br/>
                                        <br/>
                                        <input className='btn btn-primary' type='submit' value='Add Comment' />
                                    </div>
                                </form> 
                            </li> 
                        </div>
                    </div>
                    <div className="form-group col-sm-12">
                        <li className='list-group-item text-capitalize rounded'>
                            <h2>Comments</h2>
                            {comments}
                        </li>
                    </div>
                </div>

            </main>
        </Def>
    )

}


module.exports = showEvents