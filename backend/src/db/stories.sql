CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    avatar TEXT,
    image TEXT,
    timestamp VARCHAR(10)
);

INSERT INTO stories (username, avatar, image, timestamp) VALUES 
('user1', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Boy1-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel2-min.jpg', '2h ago'),
('user2', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Boy2-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel4-min.jpg', '3h ago'),
('user3', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Boy3-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel4-min.jpg', '4h ago'),
('user4', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Boy4-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel7-min.jpg', '5h ago'),
('user5', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Boy5-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel10-min.jpg', '6h ago'),
('user6', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Girl1-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel11-min.jpg', '7h ago'),
('user7', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Girl2-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel13-min.jpg', '8h ago'),
('user8', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Girl3-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel15-min.jpg', '9h ago'),
('user9', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Girl4-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel5-min.jpg', '10h ago'),
('user10', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/avatars/Girl5-min.png', 'https://shashankgs10.github.io/image_cdn/compressImgCDN/stories/pixel3-min.jpg', '11h ago');