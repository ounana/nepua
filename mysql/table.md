# 数据库的一些操作


## table
数据库表的一些操作

```sql

-- 增加一个字段
ALTER TABLE [表名] ADD [字段名] [类型]
AlTER TABLE user UPDATE create_at TIMESTAMP

-- 修改一个字段
AlTER TABLE [表名] CHANGE [字段名] [更新后的字段名] [类型] [规则]
AlTER TABLE user CHANGE create_at create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP


```
