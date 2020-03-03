import React from 'react';
import { Card, Image, Rating, Header } from 'semantic-ui-react'

const ItemCard = (props) => {


    const itemTitle = () => {
        if(props.item){
           return <> {props.item.title.slice(0, 35)}{props.item.title.length > 30 ? "..." : null } </>
        }else{
            return null
        }
    }


    if(props.item.reviews){
            let ratingArr = props.item.reviews.map(review => review.rating)
            let sumRatingArr = ratingArr.length === 0 ? 0 : ratingArr.reduce((total, num) => total + num)
            let averageRating = sumRatingArr === 0 ? 0 : sumRatingArr / ratingArr.length

        return(
                <Card className="item-card">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image" wrapped ui={false}/>
                    <Card.Content>
                    <Header>{itemTitle()}</Header>
                        <Rating icon='star' defaultRating={averageRating} maxRating={5} disabled/>
                    </Card.Content>
                    <Card.Content extra>
                        <p>Price:</p>
                        <b>${props.item.price}</b>
                    </Card.Content>
                </Card>
        );
    }return null
};

export default ItemCard;







// console.log(props.item.reviews)
    // Review average add up all the numbers and divide them by the number of ratings
    // const reviews = (total, num) => {
    //     return total + num
    // }
    // function averageReviews (reviews){
        //     for(let i=0 ; i < reviews.length; i++) {
            //         return reviews[i].rating
            //     }
            // }
        // let reviews = props.item.reviews

        // let review = reviews.map(review => review.rating)

        // let average = review.reduce((total, num) => total + num)
    // const averageReviews = props.item.reviews.length === 0 ? 0 : props.item.reviews.reduce(reviews) / props.item.reviews.length