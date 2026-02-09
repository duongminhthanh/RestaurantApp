using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantApi.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }

        [Column(TypeName = "nvarchar(75)")]
        public string OrderNumber { get; set; } = string.Empty;

        // --- Relationship: Customer (N-1) ---
        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customer? Customer { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string? PMethod { get; set; }

        public decimal GTotal { get; set; }

        // --- Relationship: OrderDetails (1-N) ---
        // Khởi tạo sẵn List để tránh lỗi Null Reference khi thao tác thêm/xóa item
        public List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

        [NotMapped]
        public string? DeletedOrderItemIds { get; set; }
    }
}
