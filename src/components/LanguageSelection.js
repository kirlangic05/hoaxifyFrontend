import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const languageSelection = (props) => {
    const onChangeLanguage= language =>{
        const {i18n} = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };
    return (
        <div>
        <img src='http://flags.fmcdn.net/data/flags/mini/tr.png' alt='Turkey Flag' 
        onClick={()=> onChangeLanguage('tr')}
         style ={{cursor: 'pointer'}} ></img>

        <img src='http://flags.fmcdn.net/data/flags/mini/us.png' alt='USA Flag' 
        onClick={()=> onChangeLanguage('en')}
         style ={{cursor: 'pointer'}}></img>
    </div>
    );
};

export default withTranslation()(languageSelection);