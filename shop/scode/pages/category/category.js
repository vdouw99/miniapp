
import { Category } from 'category-model.js';
var category = new Category();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        categoryTypeArr: {},
        currentMenuIndex: 0,
        loadedData: {}   //字典(key=>value)，dictionary
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this._loadData();
    },

    _loadData: function () {
        category.getCategoryType((categoryData) => {
            this.setData({ categoryTypeArr: categoryData });
            category.getProductsByCategory(categoryData[0].id, (data) => {  //一定在回调里再进行获取分类详情的方法调用
                var dataObj = {
                    procucts: data,
                    topImgUrl: categoryData[0].img.url,
                    title: categoryData[0].name
                };
                this.setData({ categoryProducts: dataObj });
                this.data.loadedData[0] = dataObj;
            });
        });
    },  

    // 判断当前分类下的商品数据是否已经被加载过
    isLoadedData: function (index) {  //index->某个分类的序号
        if (this.data.loadedData[index]) {
            return true;
        }
        return false;
    },

    changeCategory: function (event) {
        var index = category.getDataSet(event, 'index');
        var id = category.getDataSet(event, 'id');
        this.setData({ currentMenuIndex: index });
        if (!this.isLoadedData(index)) {  //如果没有加载过当前分类的商品数据
            category.getProductsByCategory(id, (data) => {
                var dataObj = {
                    procucts: data,
                    topImgUrl: this.data.categoryTypeArr[index].img.url,
                    title: this.data.categoryTypeArr[index].name
                };
                this.setData({ categoryProducts: dataObj });
                this.data.loadedData[index] = dataObj;
            });
        } else {  //已经加载过，直接读取
            this.setData({ categoryProducts: this.data.loadedData[index] });
        }
    },

    /*跳转到商品详情*/
    onProductsItemTap: function (event) {
        var id = category.getDataSet(event, 'id');
        wx.navigateTo({ url: '../product/product?id=' + id });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    }
})