import cv2
import os

cap = cv2.VideoCapture('ngoc.mp4')  # Mở video
frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    frames.append(frame)
cap.release()


def save_frames_to_images(frames, output_folder):
    """
    Lưu các frame thành ảnh vào thư mục.

    Args:
        frames: Danh sách các frame (NumPy arrays).
        output_folder: Đường dẫn đến thư mục lưu ảnh.
    """

    # Tạo thư mục nếu chưa tồn tại
    os.makedirs(output_folder, exist_ok=True)

    # Lưu từng frame
    for i, frame in enumerate(frames):
        filename = os.path.join(output_folder, f'frame_{i}.jpg')  # Tên file
        cv2.imwrite(filename, frame)  # Ghi ảnh

save_frames_to_images(frames, 'ngoc')