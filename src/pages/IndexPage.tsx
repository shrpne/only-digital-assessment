import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/globalStyles';
import Demo from '@/components/demo/Demo';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding-inline: 25px;
    margin-inline: auto;

    @media (width < ${breakpoints.md}) {
        padding: 0;
    }
`;

const Page = styled.div`
    --page-padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 1440px;
    width: 100%;
    padding: 60px var(--page-padding);
    border-inline: 1px solid var(--border-color);
    margin-inline: auto;
    position: relative;

    @media (width < ${breakpoints.md}) {
        --page-padding: 20px;
        border: none;
        padding-block: 20px 13px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        background: var(--border-color);

        @media (width < ${breakpoints.md}) {
            content: none;
        }
    }
`;

const IndexPage: React.FC = () => {
    return (
        <PageContainer>
            <Page>
                <Demo />
            </Page>
        </PageContainer>
    );
};

export default IndexPage;
