import React from 'react';
import styles from './index.css';
import { LogoutOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { EditOutlined, MoneyCollectOutlined , AppstoreOutlined, FireOutlined, DatabaseOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import Link from "umi/link";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <header className={styles.title}> 
        <a href="/"><h1 className={styles.logo}>Tripbtoz</h1></a>
        <a href="" className={styles.logout}>
          <LogoutOutlined style={{padding: '10px'}} />
          로그아웃
        </a>
      </header>
      <Layout style={{margin: '24px'}}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          > 
            <Menu.Item key="1">
              <Link to="/basic"> 
                <EditOutlined /> 기본 정보
              </Link>
            </Menu.Item>
            <Menu.Item key="2"> 
              <MoneyCollectOutlined /> 전체 판매가 확인</Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <AppstoreOutlined />
                  객실 설정
                </span>
              }
            >
              <Menu.Item key="3">디럭스 트윈룸</Menu.Item>
              <Menu.Item key="4">빌라, 침실 3개</Menu.Item>
            </SubMenu>

            <Menu.Item key="5"> <FireOutlined /> 프로모션 설정</Menu.Item>
            <Menu.Item key="6"> <DatabaseOutlined /> 요금 및 일괄 수정</Menu.Item>
            <Menu.Item key="7"> <DatabaseOutlined /> 재고 일괄 수정</Menu.Item>
            <Menu.Item key="8"> <UsergroupAddOutlined />예약 관리</Menu.Item>
            <Menu.Item key="9"> <UsergroupAddOutlined /> 온라인 담당자</Menu.Item>
            <Menu.Item key="10"> <UsergroupAddOutlined />회원 관리</Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.contentLayout}>
          <Content className={styles.contentbg}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
