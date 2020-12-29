import React, {useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import '../styles/ExtraReview.css';
import { HorizontalBar } from 'react-chartjs-2';

function Evaluation({profile, nickname, rating, date_uploaded,product,picture,evaluation}) {
    return (
     <div>
      <h1> {profile} {nickname} </h1>
      <h4>{rating} {date_uploaded}</h4>
      <h3>{product}</h3>
      <img src = {picture} alt={nickname}/>
      <h4>{evaluation}</h4>
    </div>
    )}
  
  const userEvaluate = [{
    id: 25406,
    nickname: "Honey",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 4,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, XL",
    evaluation: "상품의 배송 상태가 생각보다 좋아 아주 놀라웠습니다. 이 정도 가격에 이 정도면 완전 상타치~",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25405,
    nickname: "홍남매",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 4,
    product: "와이티클로젯 NEXT 맨투맨 세트, 그레이, L",
    evaluation: "옷이 아주 넉넉하고 편해요. 집에서 입기 딱 좋아요.",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25404,
    nickname: "lunacia",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 4,
    product: "와이티클로젯 NEXT 맨투맨 세트, 블랙, M",
    evaluation: "good~",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25403,
    nickname: "Fan",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 2,
    product: "와이티클로젯 NEXT 맨투맨 세트, 블랙, S",
    evaluation: "세탁할 때 주의해야 겠네요...",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25402,
    nickname: "cnn",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 5,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, XL",
    evaluation: "아주 만족스럽습니다~",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25397,
    nickname: "kelly",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 3,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, XS",
    evaluation: "자기사이즈로 그냥 사는게 좋아보여요~",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25398,
    nickname: "ggul",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 3,
    product: "와이티클로젯 NEXT 맨투맨 세트, 그레이, L",
    evaluation: "뭔가 핏이 살짝 아쉽네요ㅠ",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25399,
    nickname: "2%",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    title: "Chocolate Covered Christmas",
    year: 2020,
    rating: 4,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, XL",
    evaluation: "2%부족해서 4.5",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25394,
    nickname: "camila",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 3,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, M",
    evaluation: "그럭저럭이요~",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  },
  {
    id: 25396,
    nickname: "mint",
    url: "https://yts.mx/movies/chocolate-covered-christmas-2020",
    profile: "Chocolate Covered Christmas",
    year: 2020,
    rating: 4,
    product: "와이티클로젯 NEXT 맨투맨 세트, 챠콜, XL",
    evaluation: "딱 무난합니다.",
    medium_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/medium-cover.jpg",
    large_cover_image: "https://yts.mx/assets/images/movies/chocolate_covered_christmas_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-12-27",
    date_uploaded_unix: 1609107613
  }];
  Evaluation.propTypes = {
    nickname: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    profile: propTypes.string.isRequired,
    date_uploaded: propTypes.string.isRequired,
    product: propTypes.string.isRequired,
    evaluation: propTypes.string.isRequired
  };

  function ExtraReview() {
      let i = 0
      let starRating = [0,0,0,0,0]
      let totalRating = 0
    for(i;i<userEvaluate.length;i++) {
        totalRating += userEvaluate[i].rating;
        starRating[userEvaluate[i].rating]++
    }
    const [showMe,setShowMe] = useState(false);
    const MoreDetail = () => {
        setShowMe(!showMe)
    }
    const StarRating = () => {
        const [rating, setRating] = useState(Math.round(totalRating/i));
        return (
            <div style = {{marginTop : 40}}>
            {[...Array(5)].map((star,j) => {
                const ratingValue = j + 1;
                return (
                    <label style = {{marginLeft : -80,marginRight : -80,float : "left"}}>
                        <FaStar 
                        className = "star"  
                        color = {ratingValue <= rating ? "#ffc107":"e4e5e9"}
                        size = {200}
                        
                        />
                    </label>
                )
                })}
                <h3 style = {{paddingLeft : "700px"}}>{totalRating/i}</h3>
            </div>
            
        );
    }
    const graphData = {
      labels : ['최고','좋음','보통','별로','나쁨'],
      datasets : [{
        label : '상품평',
        backgroundColor : 'e4e5e9ya'
      }]
    }
    /*
    const goBack = (history) => {
        history.goBack();
    }; */
    return (
        <div>
          {/*  <button onClick = {goBack}> // </button> */}
            <h2 style = {{marginRight : 600, marginTop : 10}}>상품평</h2>
          <StarRating/>
           {
               showMe? (
               <div>
                  <span style = {{marginRight : 600, float : "left"}}> 
                    <p>
                      최고 {starRating[4] / i * 100}%
                    </p>
                    <p>
                      좋음 {starRating[3] / i * 100}%
                    </p>
                    <p>
                      보통 {starRating[2] / i * 100}%
                    </p>
                    <p>
                      별로 {starRating[1] / i * 100}% 
                    </p>
                    <p>
                      나쁨 {starRating[0] / i * 100}%
                    </p>
                  </span>
                  <button onClick = {MoreDetail} style = {{backgroundColor : "white", color : "blue",border : 0,outline:0,paddingRight:"700px"}}>접기 ^</button>
               </div>
               ):(
               <div>
                   <button onClick = {MoreDetail} style = {{backgroundColor : "white", color : "blue",border : 0,outline:0,paddingRight:"700px"}}>자세히 보기 v</button>
                   
               </div>
               )
           }
           <hr/>
           
          <div>
            {userEvaluate.map(customer => (
           <Evaluation key = {customer.id} 
            nickname = {customer.nickname} 
            profile={customer.profile} 
            rating = {customer.rating}
            date_uploaded = {customer.date_uploaded}
            product = {customer.product}
            evaluation = {customer.evaluation}
            picture = {customer.medium_cover_image}/>
            ))}
          </div>
        </div>
        
    );
  }

export default ExtraReview;