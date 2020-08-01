import * as React from 'react';
import { Spinner, Content, Container } from 'native-base';

export default function LoadingSpinner() {
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner color='blue' />
            </Content>
        </Container>
    )
}