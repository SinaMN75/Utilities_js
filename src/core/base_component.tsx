import React, {Component, PureComponent} from 'react';

export class BaseComponent<P, S> extends Component<P, S> {
    showLoading() {
        console.log()
    }
}

export class BasePureComponent<P, S> extends PureComponent<P, S> {

}