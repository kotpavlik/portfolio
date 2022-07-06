import React from 'react';
import style from './customButton.module.scss'


export const ProjectButton = React.memo(({onClickChange,name,buttonClassName,type}) => {

    return (
        <div className={style.button_wrapper}>
            <button type={type}
                    style={buttonClassName}
                    className={style.proj_button}
                    onClick={onClickChange}>
                {name}
            </button>
        </div>
    );
}
)
