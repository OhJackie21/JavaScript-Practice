import React from 'react'
import { useParams } from 'react-router-dom';

const Param = (props) => {
    const {word, color, bgColor } = useParams();
    return (
        <div>
        {
            isNaN(word)? //checking if the the parameteres is a word
            <p style={
                color? //if word is a color, use this css styling
                {
                color: color,
                backgroundColor: bgColor 
                }: null
            }>
                This is a word: {word}
            </p>
            : //if the word is a number
            <p>
                This is a number: {word}
            </p>
        }
        </div>
  )
}

export default Param