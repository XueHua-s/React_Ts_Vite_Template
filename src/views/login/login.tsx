import React, {useState} from 'react'
import { useStore } from 'react-redux'
import { Card, Button, Checkbox, Form, Input } from 'antd'
const Login = () => {
  const store = useStore<StroreState, StoreAction<any>>()
  const storeState = store.getState()
  const onFinish = (success: any) => {
    console.log(success, '回调成功')
  }
  const onFinishFailed = (err: any) => {
    throw err
  }
  return (
    <React.Fragment>
      <div className={'flex-mc'} style={{ height: '100vh' }}>
        <div style={{ width: '460px' }}>
          <Card>
            <h2 className={'txt-ct mb10 color_3'}>登录</h2>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              style={{width: '100%'}}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 11, span: 13 }}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Login
