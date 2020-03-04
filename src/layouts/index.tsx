import React from 'react';
import styles from './index.css';
import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Typography} from 'antd';
import { EditOutlined, MoneyCollectOutlined , AppstoreOutlined, FireOutlined, DatabaseOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import Link from "umi/link";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;


const App: React.FC = props => {

  return (
    <div className={styles.normal}>
      <header className={styles.title}> 
        <a href="/basic"> <Title id={styles.logo}> Tripbtoz </Title> </a>
        <a href="" className={styles.logout}>
          <LogoutOutlined style={{padding: '10px'}} /> 로그아웃
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
              <Link to="/basic"> <EditOutlined /> 기본 정보 </Link>
            </Menu.Item>
            <Menu.Item key="2"> 
              <Link to="/totalprice"> <MoneyCollectOutlined /> 전체 판매가 확인 </Link>
            </Menu.Item>
            
            <SubMenu
              key="sub1"
              title={
                <span>
                  <AppstoreOutlined /> 객실 설정
                </span>
              }
            >
              <Menu.Item key="3"><Link to="/room">디럭스 트윈룸</Link></Menu.Item> 
              <Menu.Item key="4"><Link to="/room">빌라, 침실 3개</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key="5"> 
              <Link to="/promotion"> <FireOutlined /> 프로모션 설정  </Link>
            </Menu.Item>
            <Menu.Item key="6"> 
              <Link to="/editprice"> <DatabaseOutlined /> 요금 및 일괄 수정 </Link>
            </Menu.Item>
            <Menu.Item key="7"> 
              <Link to="/editstorage"> <DatabaseOutlined /> 재고 일괄 수정 </Link>
            </Menu.Item>
            <Menu.Item key="8"> 
              <Link to="/reservation"> <UsergroupAddOutlined />예약 관리 </Link>
            </Menu.Item>
            <Menu.Item key="9"> 
              <Link to="/onlinemanager"> <UsergroupAddOutlined /> 온라인 담당자 </Link>
            </Menu.Item>
            <Menu.Item key="10"> 
              <Link to="/edituser"> <UsergroupAddOutlined />회원 관리 </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className={styles.contentLayout}>
          <Content className={styles.contentbg}>
            <Text> {props.children} </Text>
          </Content>
        </Layout>

      </Layout>
    </div>
  );
};

export default App;
