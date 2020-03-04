import React from 'react';
import styles from './index.css';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { EditOutlined, MoneyCollectOutlined , AppstoreOutlined, FireOutlined, DatabaseOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import Link from "umi/link";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function() {
  return (
    <div className={styles.normal}>
          기본 정보
    </div>
  );
}