import React from 'react';

const NewsItems = (props)=> {
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        right: '0',
                        position: 'absolute'
                    }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://s.yimg.com/ny/api/res/1.2/NkxF_EA9nhPbpIxJwyGLcw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODU-/https://s.yimg.com/uu/api/res/1.2/LHr.2m8NHwjwjEjKitCDyQ--~B/aD03NDA7dz0xMjk2O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_technology_68/a75d43d2a5e74dfa04ec1de5a54d6678"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems
