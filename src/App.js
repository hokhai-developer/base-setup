import Grid from './components/Grid';
import { useEffect } from 'react';
import Row from './components/Row';
import Colum from './components/Colum';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);
function App() {
    return (
        <Grid grid>
            <Row noGutter>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
                <Colum noGutter size={['l-4', 'm-6', 's-8']}>
                    <div style={{ backgroundColor: 'red' }}>colum 1</div>
                </Colum>
            </Row>
        </Grid>
    );
}

export default App;
