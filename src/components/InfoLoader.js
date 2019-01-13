import React from 'react';
import styled from 'styled-components';
import {Fade} from 'react-reveal';

const Wrapper = styled.div`
    height: 100%:
    width: 100%;
`;

const InfoLoader = ({component, children}) =>
    component.failed ?
        <p>{component.err || `Sorry there's an issue with connection`}</p>
    :
        component &&
            <Wrapper>
                {
                component.isLoading?
                    <div className="loading"></div>
                :
                <Fade>
                    {children}
                </Fade> 
                }
            </Wrapper>

export default InfoLoader;