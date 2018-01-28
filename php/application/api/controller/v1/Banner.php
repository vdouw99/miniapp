<?php
/**
 * Created by PhpStorm.
 * User: sf
 * Date: 2018/1/28
 * Time: 18:34
 */

namespace app\api\controller\v1;

use app\api\validate\IDMustBePostiveInt;
use app\api\model\Banner as BannerModel;

class Banner
{
    /**
     * 获取指定ID的banner信息
     * @url /banner/:id
     * @http GET
     * @id banner ID号
     */
    public function getBanner($id)
    {
        (new IDMustBePostiveInt())->goCheck();
        $banner = BannerModel::getBannerByID($id);
        return $banner;
    }
}