/* @jsx createElement */
import { createElement } from 'style-sheet'

const ComponentStatic = () => <div css={{ color: 'red' }} />
const ComponentDynamic = ({ margin }) => <div css={{ margin }} />
