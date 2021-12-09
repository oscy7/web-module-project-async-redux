import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { getCharacters } from '../state/actions';
import CharacterCard from './CharacterCard';


function Characters(props) {
    
    useEffect(() => {
        props.getCharacters()
    },[])

    return (
        <div>
            {props.characters.map((char) => <CharacterCard character={char} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        characters: state.results,
    }
}


export default connect(mapStateToProps, {getCharacters})(Characters)