module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // ���ô���ļ����·��
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8071,
        // open: true, //�����Զ����������
        proxy: {
            '/api': {
                target: 'http://39.99.172.44:8082/hc-online', //��Ӧ�Լ��Ľӿ�
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}
