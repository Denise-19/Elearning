import React from 'react' 
import axios from 'axios'

class SearchArea extends React.Component{
    api_key = "cc1426b379b1e382f4e8ec9a9bc802b7";
    BASE_URL = "https://api.themoviedb.org/3";
    imgURL =`https://image.tmdb.org/t/p/w300`;
  
    
    constructor(){
        super()
        this.state = {detail: "",input: "", rating: "", rating_input: "",movie_id: "",status: "",session_id:"",request_token:"",};

        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleRating= this.handleRating.bind(this)
        this.handlePostRating= this.handlePostRating.bind(this)
        this.handleDeleteRating= this.handleDeleteRating.bind(this)
    }

    componentDidMount(){
        // axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.api_key}`) 
        // .then((res) => {
        //     console.log(res.status)
        //     this.setState({guest_session_id: res.data.guest_session_id})
        // })
        axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.api_key}`).then((res) => {
            this.setState({ request_token: res.data.request_token });
            axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.api_key}`, {
                "username": "DeniseAruan",
                "password": "tobasamosir",
                "request_token": this.state.request_token,
            })
              .then((res) => {
                console.log(res);
                axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${this.api_key}`, {
                  request_token: this.state.request_token,
                })
                .then((res) => {
                  this.setState({ session_id : res.data.session_id });
                });
              })
              .catch((error) => {
                this.setState({ error: error.response.data.status_message });
              });
          });
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    }

    handleSubmit = async event => {
        event.preventDefault();
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.input}?api_key=${this.api_key}`)
        .then(res => {
            console.log(res.data);
            this.setState({detail:res.data})
        })
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.input}/account_states?api_key=${this.api_key}&session_id=${this.state.session_id}`)
        .then((res) =>{
            this.setState({rating:res.data.rated.value})
        })
    }




    handleRating = (e) => {
        this.setState({rating_input: e.target.value})
    }

    handlePostRating = async event => {
          event.preventDefault()
              axios.post(`https://api.themoviedb.org/3/movie/${this.state.input}/rating?api_key=${this.api_key}&session_id=${this.state.session_id}`, {value:this.state.rating_input}) 
              .then((res) => {
                  console.log(res.status)
              })
    }

    handleDeleteRating = async event => {
        event.preventDefault()
        axios.delete(`https://api.themoviedb.org/3/movie/${this.state.input}/rating?api_key=${this.api_key}&session_id=${this.state.session_id}`)
        .then((res) => {
            console.log(res.status)
        })
    }

   // handlePostRating = async event => {
    //     event.preventDefault()
    //     axios.get(`/authentication/guest_session/new`)
    //     .then((res) => {
    //         console.log(res.data)
    //         axios.get(`https://api.themoviedb.org/3/movie/${this.state.movie_id}/rating?api_key=${this.api_key}&session_id=${this.session_ID}`,{value: this.state.rating})
    //         .then((res) => {
    //              console.log(res.data)
    //              axios.post(``)
    //          })
    //     })
    // }
    
    render(){
        console.log(this.state.session_id)

        return (
            <div className="bg-white  flex flex-col justify-center items-center">
                <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    Moflix
                </h1>
                <div className="flex relative mx-auto ">
                    <form className="" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <input id="search" className="py-6 px-2 justify-center bg-red-300 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 case-in-out flex items-center animate-bounce text-black" placeholder="Search movie" type="text"  onChange={this.handleChange}/>
                                <input className="text-center bg-yellow-300 py-2 px-4 rounded-full justify-center" type="submit" value="search"/>
                            </div>
                    </form>
                </div>
                <div className=" flex items-center mx-auto py-6">
                    <div className="lg:float-left lg:w-2/5 px-10 ">
                        { this.state.detail && this.state.detail.poster_path &&
                        <img src={this.imgURL + this.state.detail.poster_path}></img>
                        }
                    </div>
                    <div className="lg:float-right lg:w-2/5 px-5">
                        <p className="font-bold text-center">{this.state.detail.original_title}</p>
                        <p>Overview : </p>
                        <p>{this.state.detail.overview}</p>
                        <p >Rating :{this.state.rating}</p>
                        {this.state.detail &&
                        <input id="rating" type="text" className="border-2 border-red-300 rounded-full transition h-8 px-5   focus:outline-none w-full text-black text-lg " value={this.state.rating_input.value} onChange={this.handleRating}/> }
                        <button className="font-extrabold text-3xl w-10" onClick={this.handlePostRating}>+</button>
                        <button className="font-extrabold text-3xl w-10" onClick={this.handleDeleteRating}>-</button>

                    </div>
                </div>
               
            </div>

        )
    }
}
export default SearchArea;

