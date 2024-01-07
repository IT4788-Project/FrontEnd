export default DishCategory = [
  (buasang = [
    {
      id: 1,
      nameDish: "Bún riêu cua",
      dish_description:
        "Bún riêu cua là một món ăn truyền thống Việt Nam, nổi tiếng với hương vị đậm đà. Nấu bún riêu cua, bạn chỉ cần đun sôi nước dùng cua đậm đà, thêm cà chua, giò lụa, và rau sống. Ăn kèm bún, mỗi ngụm mang đến hương vị đặc trưng của miền Nam, hòa quyện hài hòa giữa cua tươi, cà chua chua ngọt và giò lụa thơm béo. Một bữa ăn nhẹ, ngon miệng và đậm đà!",
      linkImage: require("../assets/Dish/1.png"),
      tags: ["sợi bún", "cua", "cà chua", "giò lụa", "nước mắm"],
    },
    {
      id: 2,
      nameDish: "Phở bò",
      dish_description:
        "Phở bò là một món ăn truyền thống của Việt Nam, có hương vị đặc trưng từ nước dùng và thơm của các loại gia vị. Nấu phở bò, đun sôi xương, ninh nước dùng. Cho phở, bò, và gia vị vào, nấu chín. Hâm nóng bát phở, thêm bò, rau sống và bún. Mỗi giọt nước dùng, mỗi sợi bún, là một hòa quyện hương vị phức tạp, đưa ẩm thực Việt trở nên đặc biệt.",
      linkImage: require("../assets/Dish/2.jpg"),
      tags: ["sợi phở", "xương", "thịt bò", "hành lá"],
    },
    {
      id: 3,
      nameDish: "Mì xào hải sản",
      linkImage: require("../assets/Dish/3.jpg"),
      dish_description:
        "Mì xào hải sản là một món ăn ngon và dinh dưỡng với hương vị đặc trưng của hải sản.Nấu mỳ xào hải sản, đầu tiên, chiên thơm tỏi và hành trong dầu nóng. Thêm hải sản như mực, tôm, và nghêu, xào nhanh cho chín. Đổ nước mắm, dầu gạo và gia vị vào, khuấy đều. Rót hỗn hợp này lên mỳ luộc, tạo nên tô mỳ xào hải sản hấp dẫn. Hương vị biển cả kết hợp với độ giòn của mỳ, tạo nên bữa ăn ngon miệng và hấp dẫn",
      tags: ["Mỳ tôm", "Tôm", "Mực ống", "Hành"],
    },
    {
      id: 4,
      nameDish: "Bánh mì pate",
      linkImage: require("../assets/Dish/9.jpg"),
      dish_description:
        "Bánh mì nướng chảo với pate, thịt, giò lụa, rau sống và sốt nước mắm. Làm bánh mỳ, trộn bột với nước, men nở và muối. Đợi cho bột nở, sau đó nướng trong lò cho đến khi bánh mỳ nâu giòn. Mỗi ổ bánh mỳ là sự kết hợp hài hòa giữa vị béo của bánh và hương thơm nồng của bột nướng tạo nên một trải nghiệm ẩm thực đơn giản và ngon miệng.",
      tags: ["bánh mỳ", "thịt lợn", "rau", "dưa chuột", "giò lụa"],
    },
  ]),
  (buatrua = [
    {
      id: 1,
      nameDish: "Sushi",
      linkImage: require("../assets/Dish/4.jpg"),
      dish_description:
        "Một món ăn Nhật Bản nổi tiếng, thường được làm từ cơm trắng và các loại hải sản tươi ngon. Làm sushi, trải cơm sushi lên rong biển, thêm cá hồi, tôm và rau. Cuốn chặt, cắt thành từng miếng nhỏ. Dùng với nước tương và gari. Mỗi viên sushi là sự hòa quyện của cơm mềm, hải sản tươi ngon, và vị ngon của rong biển, mang đến trải nghiệm ẩm thực Nhật Bản tinh tế.",
      tags: ["Cá hồi", "Cơm trắng", "Rau"],
    },
    {
      id: 2,
      nameDish: "Thịt gà xả ới",
      linkImage: require("../assets/Dish/13.jpg"),
      dish_description:
        "Thịt gà ướp xả ới, nướng giòn, thơm phức, ăn kèm với nước mắm pha chua ngọt. Làm thịt gà xả ớt, xào thịt gà với xả và ớt cho đến khi thấm đều gia vị. Mỗi miếng thịt gà mang đến hương vị cay nồng của ớt và thơm ngon của xả, tạo nên một món ăn ngon miệng và đậm đà.",
      tags: ["thịt gà", "nước mắm", "xả", "ớt"],
    },
    {
      id: 3,
      nameDish: "Đậu tẩm hành",
      linkImage: require("../assets/Dish/14.jpg"),
      dish_description:
        "Đậu hủ tẩm gia vị, chiên giòn, thường ăn kèm với sốt mắm tương. Làm đậu tẩm hành, xào đậu với hành tỏi và gia vị như nước mắm, tiêu. Xào cho đến khi đậu chín và hấp thụ hương vị. Mỗi miếng đậu tẩm hành là sự hòa quyện giữa vị béo của đậu, hương thơm của hành tỏi và gia vị, tạo nên một món ăn nhẹ và thơm ngon.",
      tags: ["đậu phụ", "dầu ăn", "hành lá", "nước mắm"],
    },
    {
      id: 4,
      nameDish: "Thịt kho tàu",
      linkImage: require("../assets/Dish/16.jpg"),
      dish_description:
        "Thịt lợn kho với nước mắm, đường, và gia vị, thường ăn kèm với cơm trắng. Làm thịt kho tàu, ướp thịt với nước mắm, đường, tỏi, và tiêu. Kho thịt với nước cốt dừa cho đến khi thịt mềm và sốt sánh. Mỗi miếng thịt kho tàu là sự pha trộn hài hòa giữa vị ngọt của nước cốt dừa, hương thơm của tỏi, và vị đậm đà của thịt, tạo nên một món ăn truyền thống và ngon miệng.",
      tags: ["thịt lợn", "nước mắm", "trứng gà", "đường"],
    },
    {
      id: 5,
      nameDish: "Canh chua",
      linkImage: require("../assets/Dish/18.jpg"),
      dish_description:
        "Canh chua là một món canh truyền thống, thường xuất hiện trong bữa trưa ở miền Nam Việt Nam. Canh chua có hương vị chua ngọt, thường được nấu với cá, tôm, rau sống và dầu mỡ.Làm canh chua, đun sôi nước dùng, thêm cà chua, dưa chuột, và các loại rau sống. Nấu chín thêm cá lợi và gia vị như nước mắm, đường, và ớt. Mỗi tô canh chua là sự phối hợp hài hòa giữa vị chua ngọt, hương thơm của cá, và độ tươi ngon của rau sống, tạo nên một bữa ăn canh ngon miệng và tinh tế.",
      tags: ["nước mắm", "cà chua", "rau thơm"],
    },
    {
      id: 6,
      nameDish: "Cá kho tộ",
      linkImage: require("../assets/Dish/20.jpg"),
      dish_description:
        "Cá kho tộ là một món kho truyền thống, thường xuất hiện trong bữa trưa ở cả ba miền đất nước. Cá kho tộ được nấu từ cá biển hoặc cá nước ngọt với nước mắm, đường và gia vị. Làm cá kho tộ, ướp cá với nước mắm, đường, tỏi, và tiêu. Kho cá trong nồi đất với nước cốt dừa cho đến khi cá thấm hương vị. Mỗi suất cá kho tộ là sự kết hợp độc đáo giữa vị ngọt của nước cốt dừa, hương thơm của tỏi, và độ mềm mại của cá, tạo nên một món ăn biểu tượng và ngon miệng.",
      tags: ["cá", "nước mắm"],
    },
    {
      id: 7,
      nameDish: "Lasagna",
      linkImage: require("../assets/Dish/6.jpg"),
      dish_description:
        "Một món ăn Ý gồm các lớp bánh mì, thịt, sốt cà chua và phô mai. Làm lasagna, lớp bánh mì lasagna xen kẽ với lớp sốt bò, sốt cà chua, và pho mai. Lặp lại quá trình này và nướng trong lò cho đến khi bề mặt hấp dẫn và phô mai tan chảy. Mỗi miếng lasagna là sự pha trộn tuyệt vời giữa lớp bánh mì mềm mịn, hương vị đậm đà của sốt bò, và vị thơm ngon của pho mai, tạo nên một bữa ăn ấm áp và ngon miệng.",
      tags: ["bánh mỳ", "thịt bò", "cà chua", "phô mai"],
    },
    {
      id: 8,
      nameDish: "Sashimi",
      linkImage: require("../assets/Dish/7.jpg"),
      dish_description:
        "Một món sushi đặc trưng, chứa các lát hải sản tươi ngon, thường được ăn sống. Làm sashimi, cắt cá hồi, hải sản hoặc thịt tươi thành từng lớp mỏng. Sắp xếp trên đĩa với rau sống, củ cải, và gari. Dùng kèm với nước tương và wasabi. Mỗi miếng sashimi là sự tinh tế của hương vị biển cả, độ tươi ngon và vị độc đáo của mỗi loại cá, tạo nên một bữa ăn sushi thanh lịch và độc đáo.",

      tags: ["cá hồi", "cơm trắng", "nước mắm"],
    },
  ]),
  (buatoi = [
    {
      id: 1,
      nameDish: "Cơm niêu",
      linkImage: require("../assets/Dish/8.png"),
      dish_description:
        "Cơm nấu trong nồi đất hoặc chảo từ củ nấm, thịt, và nước dùng. Làm cơm niêu, trộn cơm với gia vị, hấp cùng thịt gà, nấm, và xúc xích. Mỗi suất cơm niêu là sự kết hợp độc đáo giữa cơm thơm và hương vị đa dạng của các nguyên liệu, tạo nên bữa ăn ấm áp và ngon miệng.",
      tags: ["cơm trắng", "nấm", "rau", "thịt gà", "thịt lợn"],
    },
    {
      id: 2,
      nameDish: "Bánh đa",
      linkImage: require("../assets/Dish/12.jpg"),
      dish_description:
        "Bánh tráng trắng và giòn, thường dùng để cuốn các món gỏi cuốn. ",
      tags: ["gạo", "vừng"],
    },
    {
      id: 3,
      nameDish: "Gà rang xả",
      linkImage: require("../assets/Dish/15.jpg"),
      dish_description:
        "Thịt gà chiên giòn với xả, gia vị đặc trưng, thường ăn kèm với cơm. Làm gà rang xả, ướp thịt gà với xả, nước mắm, tiêu và ớt cay. Xào thịt gà cho đến khi vàng giòn và thấm đều gia vị. Mỗi miếng gà rang xả là sự kết hợp tuyệt vời giữa vị thơm của xả, hương vị cay nồng và độ giòn của thịt gà, tạo nên một món ăn hấp dẫn và đậm đà.",
      tags: ["thịt gà", "xả", "nước mắm"],
    },
    {
      id: 4,
      nameDish: "Cơm rang",
      linkImage: require("../assets/Dish/17.jpg"),
      dish_description:
        "Cơm rang là món ăn phổ biến trong bữa trưa của gia đình Việt Nam. Cơm rang thường được nấu từ cơm nguội, ăn kèm với thịt gà, tôm, rau củ và gia vị. Làm cơm rang, xào cơm với hành tỏi, dầu mỡ và nước mắm. Mỗi suất là sự kết hợp đơn giản và ngon miệng.",
      tags: ["gạo", "trứng", "cà rốt"],
    },
    {
      id: 5,
      nameDish: "Bún ốc",
      linkImage: require("../assets/Dish/19.jpg"),
      dish_description:
        "Bún ốc là một món ăn ngon và phổ biến trong bữa trưa tại miền Bắc Việt Nam. Bún ốc có chế biến đa dạng với các loại ốc, bún và nước dùng thơm ngon.Làm bún ốc, nấu nước dùng ốc thơm ngon, thêm ốc, rau sống, và bún. Mỗi tô bún ốc là sự hòa quyện tuyệt vời giữa hương vị thơm của nước dùng ốc và độ ngon của ốc, tạo nên một bữa ăn ngon miệng và truyền thống. ",
      tags: ["sợi bún", "ốc", "nước mắm"],
    },
    {
      id: 6,
      nameDish: "Cá kho tộ",
      linkImage: require("../assets/Dish/20.jpg"),
      dish_description:
        "Cá kho tộ là một món kho truyền thống, thường xuất hiện trong bữa trưa ở cả ba miền đất nước. Cá kho tộ được nấu từ cá biển hoặc cá nước ngọt với nước mắm, đường và gia vị. Làm cá kho tộ, ướp cá với nước mắm, đường, tỏi, và tiêu. Kho cá trong nồi đất với nước cốt dừa cho đến khi cá thấm hương vị. Mỗi suất cá kho tộ là sự kết hợp độc đáo giữa vị ngọt của nước cốt dừa, hương thơm của tỏi, và độ mềm mại của cá, tạo nên một món ăn biểu tượng và ngon miệng.",
      tags: ["cá", "nước mắm"],
    },
    {
      id: 7,
      nameDish: "Sushi",
      linkImage: require("../assets/Dish/4.jpg"),
      dish_description:
        "Một món ăn Nhật Bản nổi tiếng, thường được làm từ cơm trắng và các loại hải sản tươi ngon. Làm sushi, trải cơm sushi lên rong biển, thêm cá hồi, tôm và rau. Cuốn chặt, cắt thành từng miếng nhỏ. Dùng với nước tương và gari. Mỗi viên sushi là sự hòa quyện của cơm mềm, hải sản tươi ngon, và vị ngon của rong biển, mang đến trải nghiệm ẩm thực Nhật Bản tinh tế.",
      tags: ["Cá hồi", "Cơm trắng", "Rau"],
    },
    {
      id: 8,
      nameDish: "Pizza",
      linkImage: require("../assets/Dish/5.png"),
      dish_description:
        "Một món ăn ngon xuất phát từ Ý, bao gồm bánh pizza và các loại topping như phô mai, thịt và rau sống. Làm pizza, trải bột lên khuôn, thêm sốt cà chua, phô mai, và các nguyên liệu yêu thích như thịt hấp, rau củ hoặc nấm. Nướng trong lò cho đến khi bánh vàng giòn. Mỗi miếng pizza là sự kết hợp hài hòa giữa vị ngon của sốt cà chua, mỡ của phô mai, và hương thơm của các nguyên liệu, tạo nên bữa ăn thú vị và phong cách.",
      tags: ["Phô mai", "Thịt lợn", "rau sống", "cà chua", "phô mai"],
    },
    {
      id: 9,
      nameDish: "Lasagna",
      linkImage: require("../assets/Dish/6.jpg"),
      dish_description:
        "Một món ăn Ý gồm các lớp bánh mì, thịt, sốt cà chua và phô mai. Làm lasagna, lớp bánh mì lasagna xen kẽ với lớp sốt bò, sốt cà chua, và pho mai. Lặp lại quá trình này và nướng trong lò cho đến khi bề mặt hấp dẫn và phô mai tan chảy. Mỗi miếng lasagna là sự pha trộn tuyệt vời giữa lớp bánh mì mềm mịn, hương vị đậm đà của sốt bò, và vị thơm ngon của pho mai, tạo nên một bữa ăn ấm áp và ngon miệng.",
      tags: ["bánh mỳ", "thịt bò", "cà chua", "phô mai"],
    },
    {
      id: 10,
      nameDish: "Sashimi",
      linkImage: require("../assets/Dish/7.jpg"),
      dish_description:
        "Một món sushi đặc trưng, chứa các lát hải sản tươi ngon, thường được ăn sống. Làm sashimi, cắt cá hồi, hải sản hoặc thịt tươi thành từng lớp mỏng. Sắp xếp trên đĩa với rau sống, củ cải, và gari. Dùng kèm với nước tương và wasabi. Mỗi miếng sashimi là sự tinh tế của hương vị biển cả, độ tươi ngon và vị độc đáo của mỗi loại cá, tạo nên một bữa ăn sushi thanh lịch và độc đáo.",

      tags: ["cá hồi", "cơm trắng", "nước mắm"],
    },
  ]),
  (monchinh = [
    {
      id: 1,
      nameDish: "Lasagna",
      linkImage: require("../assets/Dish/6.jpg"),
      dish_description:
        "Một món ăn Ý gồm các lớp bánh mì, thịt, sốt cà chua và phô mai. Làm lasagna, lớp bánh mì lasagna xen kẽ với lớp sốt bò, sốt cà chua, và pho mai. Lặp lại quá trình này và nướng trong lò cho đến khi bề mặt hấp dẫn và phô mai tan chảy. Mỗi miếng lasagna là sự pha trộn tuyệt vời giữa lớp bánh mì mềm mịn, hương vị đậm đà của sốt bò, và vị thơm ngon của pho mai, tạo nên một bữa ăn ấm áp và ngon miệng.",
      tags: ["bánh mỳ", "thịt bò", "cà chua", "phô mai"],
    },
    {
      id: 2,
      nameDish: "Sashimi",
      linkImage: require("../assets/Dish/7.jpg"),
      dish_description:
        "Một món sushi đặc trưng, chứa các lát hải sản tươi ngon, thường được ăn sống. Làm sashimi, cắt cá hồi, hải sản hoặc thịt tươi thành từng lớp mỏng. Sắp xếp trên đĩa với rau sống, củ cải, và gari. Dùng kèm với nước tương và wasabi. Mỗi miếng sashimi là sự tinh tế của hương vị biển cả, độ tươi ngon và vị độc đáo của mỗi loại cá, tạo nên một bữa ăn sushi thanh lịch và độc đáo.",

      tags: ["cá hồi", "cơm trắng", "nước mắm"],
    },
    {
      id: 3,
      nameDish: "Cơm niêu",
      linkImage: require("../assets/Dish/8.png"),
      dish_description:
        "Cơm nấu trong nồi đất hoặc chảo từ củ nấm, thịt, và nước dùng. Làm cơm niêu, trộn cơm với gia vị, hấp cùng thịt gà, nấm, và xúc xích. Mỗi suất cơm niêu là sự kết hợp độc đáo giữa cơm thơm và hương vị đa dạng của các nguyên liệu, tạo nên bữa ăn ấm áp và ngon miệng.",
      tags: ["cơm trắng", "nấm", "rau", "thịt gà", "thịt lợn"],
    },
    {
      id: 4,
      nameDish: "Chả tôm",
      linkImage: require("../assets/Dish/10.jpg"),
      dish_description:
        "Chả tôm giòn, thơm ngon, thường ăn kèm với nước mắm pha chua ngọt. Làm chả tôm, trộn tôm băm nhuyễn với gia vị như hành tỏi, nước mắm, và tiêu. Đặt hỗn hợp này vào que tre hoặc que xiên, nướng cho đến khi chả tôm chín vàng. Mỗi que chả tôm là sự hòa quyện giữa hương vị tươi ngon của tôm và gia vị, tạo nên một món ăn nhẹ, ngon miệng và thích hợp làm món nhậu.",
      tags: ["tôm", "cà chua", "nước mắm"],
    },
    {
      id: 5,
      nameDish: "Thịt gà xả ới",
      linkImage: require("../assets/Dish/13.jpg"),
      dish_description:
        "Thịt gà ướp xả ới, nướng giòn, thơm phức, ăn kèm với nước mắm pha chua ngọt. Làm thịt gà xả ớt, xào thịt gà với xả và ớt cho đến khi thấm đều gia vị. Mỗi miếng thịt gà mang đến hương vị cay nồng của ớt và thơm ngon của xả, tạo nên một món ăn ngon miệng và đậm đà.",
      tags: ["thịt gà", "nước mắm", "xả", "ớt"],
    },
    {
      id: 6,
      nameDish: "Gà rang xả",
      linkImage: require("../assets/Dish/15.jpg"),
      dish_description:
        "Thịt gà chiên giòn với xả, gia vị đặc trưng, thường ăn kèm với cơm. Làm gà rang xả, ướp thịt gà với xả, nước mắm, tiêu và ớt cay. Xào thịt gà cho đến khi vàng giòn và thấm đều gia vị. Mỗi miếng gà rang xả là sự kết hợp tuyệt vời giữa vị thơm của xả, hương vị cay nồng và độ giòn của thịt gà, tạo nên một món ăn hấp dẫn và đậm đà.",
      tags: ["thịt gà", "xả", "nước mắm"],
    },
    {
      id: 7,
      nameDish: "Thịt kho tàu",
      linkImage: require("../assets/Dish/16.jpg"),
      dish_description:
        "Thịt lợn kho với nước mắm, đường, và gia vị, thường ăn kèm với cơm trắng. Làm thịt kho tàu, ướp thịt với nước mắm, đường, tỏi, và tiêu. Kho thịt với nước cốt dừa cho đến khi thịt mềm và sốt sánh. Mỗi miếng thịt kho tàu là sự pha trộn hài hòa giữa vị ngọt của nước cốt dừa, hương thơm của tỏi, và vị đậm đà của thịt, tạo nên một món ăn truyền thống và ngon miệng.",
      tags: ["thịt lợn", "nước mắm", "trứng gà", "đường"],
    },
    {
      id: 8,
      nameDish: "Cơm rang",
      linkImage: require("../assets/Dish/17.jpg"),
      dish_description:
        "Cơm rang là món ăn phổ biến trong bữa trưa của gia đình Việt Nam. Cơm rang thường được nấu từ cơm nguội, ăn kèm với thịt gà, tôm, rau củ và gia vị. Làm cơm rang, xào cơm với hành tỏi, dầu mỡ và nước mắm. Mỗi suất là sự kết hợp đơn giản và ngon miệng.",
      tags: ["gạo", "trứng", "cà rốt"],
    },
    {
      id: 9,
      nameDish: "Cá kho tộ",
      linkImage: require("../assets/Dish/20.jpg"),
      dish_description:
        "Cá kho tộ là một món kho truyền thống, thường xuất hiện trong bữa trưa ở cả ba miền đất nước. Cá kho tộ được nấu từ cá biển hoặc cá nước ngọt với nước mắm, đường và gia vị. Làm cá kho tộ, ướp cá với nước mắm, đường, tỏi, và tiêu. Kho cá trong nồi đất với nước cốt dừa cho đến khi cá thấm hương vị. Mỗi suất cá kho tộ là sự kết hợp độc đáo giữa vị ngọt của nước cốt dừa, hương thơm của tỏi, và độ mềm mại của cá, tạo nên một món ăn biểu tượng và ngon miệng.",
      tags: ["cá", "nước mắm"],
    },
  ]),
  (monphu = [
    {
      id: 1,
      nameDish: "Pizza",
      linkImage: require("../assets/Dish/5.png"),
      dish_description:
        "Một món ăn ngon xuất phát từ Ý, bao gồm bánh pizza và các loại topping như phô mai, thịt và rau sống. Làm pizza, trải bột lên khuôn, thêm sốt cà chua, phô mai, và các nguyên liệu yêu thích như thịt hấp, rau củ hoặc nấm. Nướng trong lò cho đến khi bánh vàng giòn. Mỗi miếng pizza là sự kết hợp hài hòa giữa vị ngon của sốt cà chua, mỡ của phô mai, và hương thơm của các nguyên liệu, tạo nên bữa ăn thú vị và phong cách.",
      tags: ["Phô mai", "Thịt lợn", "rau sống", "cà chua", "phô mai"],
    },
    {
      id: 2,
      nameDish: "Bánh đa",
      linkImage: require("../assets/Dish/12.jpg"),
      dish_description:
        "Bánh tráng trắng và giòn, thường dùng để cuốn các món gỏi cuốn. ",
      tags: ["gạo", "vừng"],
    },
    {
      id: 3,
      nameDish: "Đậu tẩm hành",
      linkImage: require("../assets/Dish/14.jpg"),
      dish_description:
        "Đậu hủ tẩm gia vị, chiên giòn, thường ăn kèm với sốt mắm tương. Làm đậu tẩm hành, xào đậu với hành tỏi và gia vị như nước mắm, tiêu. Xào cho đến khi đậu chín và hấp thụ hương vị. Mỗi miếng đậu tẩm hành là sự hòa quyện giữa vị béo của đậu, hương thơm của hành tỏi và gia vị, tạo nên một món ăn nhẹ và thơm ngon.",
      tags: ["đậu phụ", "dầu ăn", "hành lá", "nước mắm"],
    },
    {
      id: 4,
      nameDish: "Canh chua",
      linkImage: require("../assets/Dish/18.jpg"),
      dish_description:
        "Canh chua là một món canh truyền thống, thường xuất hiện trong bữa trưa ở miền Nam Việt Nam. Canh chua có hương vị chua ngọt, thường được nấu với cá, tôm, rau sống và dầu mỡ.Làm canh chua, đun sôi nước dùng, thêm cà chua, dưa chuột, và các loại rau sống. Nấu chín thêm cá lợi và gia vị như nước mắm, đường, và ớt. Mỗi tô canh chua là sự phối hợp hài hòa giữa vị chua ngọt, hương thơm của cá, và độ tươi ngon của rau sống, tạo nên một bữa ăn canh ngon miệng và tinh tế.",
      tags: ["nước mắm", "cà chua", "rau thơm"],
    },
    {
      id: 5,
      nameDish: "Sushi",
      linkImage: require("../assets/Dish/4.jpg"),
      dish_description:
        "Một món ăn Nhật Bản nổi tiếng, thường được làm từ cơm trắng và các loại hải sản tươi ngon. Làm sushi, trải cơm sushi lên rong biển, thêm cá hồi, tôm và rau. Cuốn chặt, cắt thành từng miếng nhỏ. Dùng với nước tương và gari. Mỗi viên sushi là sự hòa quyện của cơm mềm, hải sản tươi ngon, và vị ngon của rong biển, mang đến trải nghiệm ẩm thực Nhật Bản tinh tế.",
      tags: ["Cá hồi", "Cơm trắng", "Rau"],
    },
  ]),
  (trangmieng = [
    {
      id: 1,
      nameDish: "Nem chua",
      linkImage: require("../assets/Dish/11.jpg"),
      dish_description:
        "Một loại nem Việt Nam được làm từ thịt lợn, nước mắm và gia vị, ăn kèm với rau sống. Làm nem chua, trộn thịt lợn băm nhuyễn với gia vị như tỏi, ớt, đường, và muối. Cuộn hỗn hợp thành que và để lên nắng cho đến khi nem chua khô. Mỗi que nem chua là sự kết hợp tinh tế giữa vị chua của thịt, độ cay của ớt, và hương thơm đặc trưng, tạo nên một món ăn truyền thống độc đáo.",
      tags: ["thịt lợn", "rau", "đường"],
    },
    {
      id: 2,
      nameDish: "Bánh đa",
      linkImage: require("../assets/Dish/12.jpg"),
      dish_description:
        "Bánh tráng trắng và giòn, thường dùng để cuốn các món gỏi cuốn. ",
      tags: ["gạo", "vừng"],
    },
    {
      id: 3,
      nameDish: "Bún ốc",
      linkImage: require("../assets/Dish/19.jpg"),
      dish_description:
        "Bún ốc là một món ăn ngon và phổ biến trong bữa trưa tại miền Bắc Việt Nam. Bún ốc có chế biến đa dạng với các loại ốc, bún và nước dùng thơm ngon.Làm bún ốc, nấu nước dùng ốc thơm ngon, thêm ốc, rau sống, và bún. Mỗi tô bún ốc là sự hòa quyện tuyệt vời giữa hương vị thơm của nước dùng ốc và độ ngon của ốc, tạo nên một bữa ăn ngon miệng và truyền thống. ",
      tags: ["sợi bún", "ốc", "nước mắm"],
    },
    {
      id: 4,
      nameDish: "Pizza",
      linkImage: require("../assets/Dish/5.png"),
      dish_description:
        "Một món ăn ngon xuất phát từ Ý, bao gồm bánh pizza và các loại topping như phô mai, thịt và rau sống. Làm pizza, trải bột lên khuôn, thêm sốt cà chua, phô mai, và các nguyên liệu yêu thích như thịt hấp, rau củ hoặc nấm. Nướng trong lò cho đến khi bánh vàng giòn. Mỗi miếng pizza là sự kết hợp hài hòa giữa vị ngon của sốt cà chua, mỡ của phô mai, và hương thơm của các nguyên liệu, tạo nên bữa ăn thú vị và phong cách.",
      tags: ["Phô mai", "Thịt lợn", "rau sống", "cà chua", "phô mai"],
    },
  ]),
];
